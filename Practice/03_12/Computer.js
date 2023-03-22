class Computer {
    constructor(
        color,
            name,
            lastName,
            height,    
            width,    
            length,
        isLoaded,
    ) {
        this.color =color;
        this.ownerInfo = {
            name: name,
            lastName: lastName
        };
        this.isLoaded = isLoaded;
        this.size = {
            height: height,
            length: length,
            width: width
        };
    }
    changeOwner(owner) {
        this.ownerInfo.name = owner.name;    
        this.ownerInfo.lastName = owner.lastName;  
    }
    triggerLoading(loadStatus) {    
        this.isLoaded = loadStatus  
    }
}

export default Computer