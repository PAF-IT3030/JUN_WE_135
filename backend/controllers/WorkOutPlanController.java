package com.food_app.foodapp.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.food_app.foodapp.model.workoutplan.WorkOutPlan;
import com.food_app.foodapp.services.WorkOutPlanService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/workoutplans")
public class WorkOutPlanController {
    private final WorkOutPlanService workOutPlanService;

    public WorkOutPlanController(WorkOutPlanService workOutPlanService) {
        this.workOutPlanService = workOutPlanService;
    }

    @GetMapping
    public ResponseEntity<List<WorkOutPlan>> getAllWorkOutPlans() {
        List<WorkOutPlan> workOutPlans = workOutPlanService.getAllWorkOutPlans();
        return new ResponseEntity<>(workOutPlans, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<WorkOutPlan> getWorkOutPlanById(@PathVariable String id) {
        Optional<WorkOutPlan> workOutPlan= workOutPlanService.getWorkOutPlanById(id);
        return workOutPlan.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<WorkOutPlan> createWorkOutPlan(@RequestBody WorkOutPlan workOutPlan) {
        WorkOutPlan createdWorkOutPlan = workOutPlanService.createWorkOutPlan(workOutPlan);
        return new ResponseEntity<>(createdWorkOutPlan, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<WorkOutPlan> updateWokOutPlan(@PathVariable String id, @RequestBody WorkOutPlan workOutPlan) {
        WorkOutPlan updatedWorkOutPlan = workOutPlanService.updateWorkOutPlan(id, workOutPlan);
        return updatedWorkOutPlan != null ? new ResponseEntity<>(updatedWorkOutPlan, HttpStatus.OK) :
                new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWorkOutPlan(@PathVariable String id) {
        boolean deleted = workOutPlanService.deleteWorkOutPlan(id);
        return deleted ? new ResponseEntity<>(HttpStatus.NO_CONTENT) :
                new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}