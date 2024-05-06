package com.food_app.foodapp.model.workoutplan;

public class Exercise {
    private String name;
    private Integer sets;
    private String durationEach;
    private Integer reps;
	
    public String getName() {
		return name;
	}
	
    public void setName(String name) {
		this.name = name;
	}
	
    public Integer getSets() {
		return sets;
	}
	
    public void setSets(Integer sets) {
		this.sets = sets;
	}
	
    public String getDurationEach() {
		return durationEach;
	}
	
    public void setDurationEach(String durationEach) {
		this.durationEach = durationEach;
	}
	
    public Integer getReps() {
		return reps;
	}
	
    public void setReps(Integer reps) {
		this.reps = reps;
	}
}
