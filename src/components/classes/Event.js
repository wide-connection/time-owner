class Event {
    constructor(eName, startTime, endTime,
         completeness, focusEfficiency, task){
            this.eName=eName;
            this.startTime=startTime;
            this.endTime=endTime;
            this.completeness=completeness;
            this.focusEfficiency=focusEfficiency;
            this.task=task;

    }

    getName(){return this.eName};
}