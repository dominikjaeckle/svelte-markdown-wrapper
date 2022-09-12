import * as yaml from "js-yaml";

export class Configuration {

    static instance: Configuration = null;
    private config = null;

    static getInstance(): Configuration {
        if(Configuration.instance === null) {
            Configuration.instance = new Configuration();
        }
        return Configuration.instance;
    }

    async getConfig(): Promise<any> {
        if (this.config === null) {
            this.config = await this.readConfig('filelist.yaml');
        }
        return this.config;
    }

    async readConfig(path: string): Promise<any> {
        let parsedContent = null;
        try {
            const fileContent = await fetch(path).then(x => x.text());
            const ymlParsed: any = yaml.load(String(fileContent));
            parsedContent = ymlParsed['filelist'];
        } catch (e) {
            console.error(e);
        }
        return parsedContent;
    }
}