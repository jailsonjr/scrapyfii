import TickersQueueModel, {TickerQueueModel} from "../models/TickerQueueModel";
import TickersErrorModel, {TickerErrorModel} from "../models/TickerErrorModel";
import PriceService, { AlphaService } from "../services/AlphaService";
import TickersPriceModel, { TickerPriceModel } from "../models/TickerPriceModel";
class TickerController {

    private queueModel: TickerQueueModel;
    private priceService: AlphaService;
    private priceModel: TickerPriceModel;
    private errorModel: TickerErrorModel;

    constructor(QueueModel: TickerQueueModel, 
        ServicePrices: AlphaService, 
        PriceModel: TickerPriceModel,
        ErrorModel: TickerErrorModel) {
        this.queueModel = QueueModel;
        this.priceService = ServicePrices;
        this.priceModel = PriceModel;
        this.errorModel = ErrorModel;
    }

    updatePricesTickers = async () => {
        let getTicker = await this.queueModel.getCurrentTicker();

        console.log("STEP: 1 get ticker", getTicker);

        if(getTicker?.ticker){
            let getPricesTicker = await this.priceService.getTickerPrices(getTicker.ticker);
            console.log("STEP: 2 get prices", getPricesTicker);

            if(getPricesTicker.metadata.error) {

                let insertError = await this.errorModel.insertTickerError({
                    ticker: getTicker?.ticker,
                    ticker_error: 'nok'
                });

                let deleteInQueue = await this.queueModel.removeFromQueue(getTicker.ticker);

                return {
                    ticker: getTicker.ticker,
                    error: true,
                    insertError,
                    deleteInQueue
                };

            }            

            let insertPrices = await this.priceModel.insertPriceTicker(getPricesTicker);
            console.log("STEP: 3 insert prices", insertPrices);
            let deleteInQueue = await this.queueModel.removeFromQueue(getTicker.ticker);
            console.log("STEP: 4 delete prices", insertPrices);
            let insertedPrices = 0;
            let existsPrices = 0;

            insertPrices.map(returned => {
                if(returned.includes('inserted')) {
                    insertedPrices++;
                }

                if(returned.includes('already exists')) {
                    existsPrices++;
                }
            });

            let responseData = {
                ticker: getTicker.ticker,
                prices: {
                    insertedPrices,
                    existsPrices
                },
                deletedinQueue: deleteInQueue
            }

            return responseData;
        }


        return 'Dont Exists Ticker';  
    }

    listPricesTickers = async () => {
        let getPricesTicker = await this.priceModel.getAllPriceTickers();
        return getPricesTicker;
    }

    listTickersInQueue = async () => {
        let getListInQueue = await this.queueModel.getAllQueueTickers();
        return getListInQueue;
    }

    listTickersWithError = async () => {
        let getListError = await this.errorModel.getAllTickerWithErrors();
        return getListError;
    }

}

export default new TickerController(TickersQueueModel, PriceService, TickersPriceModel, TickersErrorModel);
