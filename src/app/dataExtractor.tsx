import eventEmitter from '../Emitter';
import data from "../projects.json";

interface ExtractorComponentProps {
    jsonData: {},
    jsonDataFiltered: {
        projects: any[];
    }
}

class ExtractorComponent {

    private collYesFilterState = false;
    private collNoFilterState = false;
    private fruitionAppFilterState = false;
    private fruitionWebFilterState = false;
    private fruitionAPIFilterState = false;

    private contPhotoFilterState = false;
    private contModelsFilterState = false;
    private contArtFilterState = false;
    private contRegFilterState = false;
    private contTextFilterState = false;

    private argArchFilterState = false;
    private argArtFilterState = false;
    private argLettFilterState = false;
    private argReligFilterState = false;
    private argStoryFilterState = false;

    private yearsFilterState = [-1, -1];


    private static sharedExtractor: ExtractorComponent;
    private jsonData = {
        projects: {}
    };
    private jsonDataFiltered = {
        projects: {}
    };

    private constructor() {
        this.jsonData = data;
        this.jsonDataFiltered = JSON.parse(JSON.stringify(data));

        this.filter = this.filter.bind(this);
        this.getDati = this.getDati.bind(this);
        this.filterByCollaborative = this.filterByCollaborative.bind(this);
    }

    public static getInstance() {
        if (!ExtractorComponent.sharedExtractor) {
            ExtractorComponent.sharedExtractor = new ExtractorComponent();
        }
        return ExtractorComponent.sharedExtractor;
    }

    public filterByCollaborative = (value: boolean) => {
        if(value) this.collYesFilterState = !this.collYesFilterState;
        else this.collNoFilterState = !this.collNoFilterState;


        this.filter();
    };

    public filterByYear = (min: number, max: number) => {

        this.yearsFilterState[0] = min;
        this.yearsFilterState[1] = max;

        this.filter();
    };

    public filterByFruition = (code: number) => {

        if(code==0)
            this.fruitionAppFilterState = !this.fruitionAppFilterState;
        else if(code==1)
            this.fruitionWebFilterState = !this.fruitionWebFilterState;
        else if(code==2)
            this.fruitionAPIFilterState = !this.fruitionAPIFilterState;


        this.filter();
    };

    public filterByCont = (code: number) => {
        if(code==0)
            this.contPhotoFilterState = !this.contPhotoFilterState;
        else if(code==1)
            this.contModelsFilterState = !this.contModelsFilterState;
        else if(code==2)
            this.contArtFilterState = !this.contArtFilterState;
        else if(code==3)
            this.contRegFilterState = !this.contRegFilterState;
        else if(code==4)
            this.contTextFilterState = !this.contTextFilterState;

        this.filter();
    };

    public filterByArg = (code: number) => {
        if(code==0)
            this.argArchFilterState = !this.argArchFilterState;
        else if(code==1)
            this.argArtFilterState = !this.argArtFilterState;
        else if(code==2)
            this.argLettFilterState = !this.argLettFilterState;
        else if(code==3)
            this.argReligFilterState = !this.argReligFilterState;
        else if(code==4)
            this.argStoryFilterState = !this.argStoryFilterState;

        this.filter();
    };


    private filter() {

        let proj = this.jsonData.projects;

        if(this.collYesFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.coll === true
            );
        }
        else if(this.collNoFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.coll === false
            );
        }

        if(this.yearsFilterState.every((value) => value != -1)) {
            proj = Object.values(proj).filter((project: any) => project.year >= this.yearsFilterState[0] && project.year <= this.yearsFilterState[1]);
        }

        if(this.fruitionAppFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.fruition.includes(0)
            );
        }

        if(this.fruitionWebFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.fruition.includes(1)
            );
        }
        if(this.fruitionAPIFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.fruition.includes(2)
            );
        }

        if(this.contPhotoFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.cont.includes(0)
            );
        }
        if(this.contModelsFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.cont.includes(1)
            );
        }
        if(this.contArtFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.cont.includes(2)
            );
        }
        if(this.contRegFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.cont.includes(3)
            );
        }
        if(this.contTextFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.cont.includes(4)
            );
        }

        if(this.argArchFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.arg.includes(0)
            );
        }
        if(this.argArtFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.arg.includes(1)
            );
        }
        if(this.argLettFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.arg.includes(2)
            );
        }
        if(this.argReligFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.arg.includes(3)
            );
        }
        if(this.argStoryFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.arg.includes(4)
            );
        }


        this.jsonDataFiltered.projects = proj;
        eventEmitter.emit('listaCambiata', this.jsonDataFiltered.projects);
    }




    public getDati = () => {
        return this.jsonDataFiltered;
    };
}

export default ExtractorComponent;