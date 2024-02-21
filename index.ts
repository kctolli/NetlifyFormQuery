import axios from "axios";

export default class NetlifyFormQuery {
    public url: string;
    private token: string;

    public constructor(token: string, formId: string) {
        this.url = `https://api.netlify.com/api/v1/forms/${formId}/submissions`;
        this.token = token;
    }

    /***************************************************
     * Public Methods
     ***************************************************/
    public getSubmissions = async (): Promise<any> => {
        const response = await axios.get(this.url, this.getOptions());
        return response?.data;
    };

    public getOptions = (): any => ({ headers: { ...this.getHeaders() } });

    public static getData = async (apiToken, formId) => {
        const formQuery = new NetlifyFormQuery(apiToken, formId);
        return await formQuery.getSubmissions();
    }

    /***************************************************
     * Private Methods
     ***************************************************/
    private readonly getHeaders = (): any => ({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
    });
}
