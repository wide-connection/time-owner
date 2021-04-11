class Task {
    constructor(tName, completeness, activeStatus,
         categoriesList, timeToCompletem, 
         assosiatedTimeblocks, recommendedSessionTime){
            this.tName=tName;
            this.completeness=completeness;
            this.activeStatus=activeStatus;
            this.categoriesList=categoriesList;
            this.timeToCompletem=timeToCompletem;
            this.assosiatedTimeblocks=assosiatedTimeblocks;
            this.recommendedSessionTime=recommendedSessionTime;

    }

    getName(){return this.tName};
}