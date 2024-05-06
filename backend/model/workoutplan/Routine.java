package com.food_app.foodapp.model.workoutplan;

public class Routine {
    private WarmUp warmUp;
    private MainWorkOut mainWorkOut;
    private CoreWork coreWork;
    private CoolDown coolDown;

	public WarmUp getWarmUp() {
		return warmUp;
	}

	public void setWarmUp(WarmUp warmUp) {
		this.warmUp = warmUp;
	}

	public MainWorkOut getMainWorkOut() {
		return mainWorkOut;
	}

	public void setMainWorkOut(MainWorkOut mainWorkOut) {
		this.mainWorkOut = mainWorkOut;
	}

	public CoreWork getCoreWork() {
		return coreWork;
	}

	public void setCoreWork(CoreWork coreWork) {
		this.coreWork = coreWork;
	}

	public CoolDown getCoolDown() {
		return coolDown;
	}

	public void setCoolDown(CoolDown coolDown) {
		this.coolDown = coolDown;
	}
}
