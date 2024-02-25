import eventEmitter from '../Emitter';
import data from "../projects.json";
import {project} from "@react-native-community/cli-platform-ios/build/config/__fixtures__/projects";

interface ExtractorComponentProps {
    jsonData: {},
    jsonDataFiltered: {
        projects: any[];
    }
}

class ExtractorComponent {

    public collYesFilterState = false;
    public collNoFilterState = false;
    public fruitionAppFilterState = false;
    public fruitionWebFilterState = false;
    public fruitionAPIFilterState = false;

    public contPhotoFilterState = false;
    public contModelsFilterState = false;
    public contArtFilterState = false;
    public contRegFilterState = false;
    public contTextFilterState = false;

    public argArchFilterState = false;
    public argArtFilterState = false;
    public argLettFilterState = false;
    public argReligFilterState = false;
    public argStoryFilterState = false;

    public contDrawFilterState = false;

    public fruitionVirtualFilterState = false;
    public argArcheoFilterState = false;

    private yearsFilterState = [-1, -1];
    private nameFilterState = "";


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

    public filterByName = (name: string) => {
        this.nameFilterState = name;

        this.filter();
    };

    public filterByFruition = (code: number) => {

        if(code==0)
            this.fruitionAppFilterState = !this.fruitionAppFilterState;
        else if(code==1)
            this.fruitionWebFilterState = !this.fruitionWebFilterState;
        else if(code==2)
            this.fruitionAPIFilterState = !this.fruitionAPIFilterState;
        else if(code==3)
            this.fruitionVirtualFilterState = !this.fruitionVirtualFilterState;


        this.filter();
    };

    public filterByCont = (code: number) => {
        if(code==0)
            this.contDrawFilterState = !this.contDrawFilterState;
        else if(code==1)
            this.contPhotoFilterState = !this.contPhotoFilterState;
        else if(code==2)
            this.contModelsFilterState = !this.contModelsFilterState;
        else if(code==3)
            this.contArtFilterState = !this.contArtFilterState;
        else if(code==4)
            this.contRegFilterState = !this.contRegFilterState;
        else if(code==5)
            this.contTextFilterState = !this.contTextFilterState;

        this.filter();
    };

    public filterByArg = (code: number) => {
        if(code==0)
            this.argArcheoFilterState = !this.argArcheoFilterState;
        else if(code==1)
            this.argArchFilterState = !this.argArchFilterState;
        else if(code==2)
            this.argArtFilterState = !this.argArtFilterState;
        else if(code==3)
            this.argLettFilterState = !this.argLettFilterState;
        else if(code==4)
            this.argReligFilterState = !this.argReligFilterState;
        else if(code==5)
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
        if(this.fruitionVirtualFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.fruition.includes(3)
            );
        }

        if(this.contDrawFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.cont.includes(0)
            );
        }
        if(this.contPhotoFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.cont.includes(1)
            );
        }
        if(this.contModelsFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.cont.includes(2)
            );
        }
        if(this.contArtFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.cont.includes(3)
            );
        }
        if(this.contRegFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.cont.includes(4)
            );
        }
        if(this.contTextFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.cont.includes(5)
            );
        }

        if(this.argArcheoFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.arg.includes(0)
            );
        }
        if(this.argArchFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.arg.includes(1)
            );
        }
        if(this.argArtFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.arg.includes(2)
            );
        }
        if(this.argLettFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.arg.includes(3)
            );
        }
        if(this.argReligFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.arg.includes(4)
            );
        }
        if(this.argStoryFilterState) {
            proj = Object.values(proj).filter((project: any) =>
                project.arg.includes(5)
            );
        }

        if(this.nameFilterState.length !== 0) {
            proj = Object.values(proj).filter((project: any) =>
                project.name.toLowerCase().includes(this.nameFilterState.toLowerCase())
            );
        }


        this.jsonDataFiltered.projects = proj;
        eventEmitter.emit('listaCambiata', this.jsonDataFiltered.projects);
    }

    public getDati = () => {
        return this.jsonDataFiltered;
    };

    public resetDati = () => {
        this.jsonDataFiltered.projects = this.jsonData.projects;
        this.collYesFilterState = false;
        this.collNoFilterState = false;
        this.fruitionAppFilterState = false;
        this.fruitionWebFilterState = false;
        this.fruitionAPIFilterState = false;
        this.fruitionVirtualFilterState = false;
        this.contPhotoFilterState = false;
        this.contModelsFilterState = false;
        this.contArtFilterState = false;
        this.contRegFilterState = false;
        this.contTextFilterState = false;
        this.argArchFilterState = false;
        this.argArtFilterState = false;
        this.argLettFilterState = false;
        this.argReligFilterState = false;
        this.argStoryFilterState = false;
        this.yearsFilterState = [-1, -1];
        this.nameFilterState = "";
        this.argArcheoFilterState = false;
        this.contDrawFilterState = false;
        eventEmitter.emit('listaCambiata', this.jsonDataFiltered.projects);
    };
}

export default ExtractorComponent;