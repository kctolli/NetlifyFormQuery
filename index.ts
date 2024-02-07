import axios from "axios";

export default class NetlifyFormQuery {
    public url: string;
    private token: string;

    public constructor(token: string, formId: string) {
        this.url = `https://api.netlify.com/api/v1/forms/${formId}/submissions`;
        this.token = token;
    }

    public getSubmissionData = async (): Promise<any> => {
        const data = [];
        const submissions = await this.getSubmissions();
        submissions.map((item: any) => {
            // @ts-ignore
            return data.push(item?.data);
        });
        return data;
    };

    public getSubmissions = async (): Promise<any> => {
        const response = await axios.get(this.url, this.getOptions());
        return response?.data;
    };

    public getOptions = (): any => ({ headers: { ...this.getHeaders() } });

    private readonly getHeaders = (): any => ({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
    });
}
