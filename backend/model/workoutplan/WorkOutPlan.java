package com.food_app.foodapp.model.workoutplan;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "workload_plans")
public class WorkOutPlan {
    @Id
    private String id;
    private String name;
    private Routine routine;
    private String[] notes;

    public String getId() {
		return id;
	}
	
    public void setId(String id) {
		this.id = id;
	}
	
    public String getName() {
		return name;
	}
	
    public void setName(String name) {
		this.name = name;
	}
	
    public Routine getRoutine() {
		return routine;
	}
	
    public void setRoutine(Routine routine) {
		this.routine = routine;
	}
	
    public String[] getNotes() {
		return notes;
	}
	
    public void setNotes(String[] notes) {
		this.notes = notes;
	}


}
