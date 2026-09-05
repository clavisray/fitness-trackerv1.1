package com.fitness.backend.controller;

import com.fitness.backend.model.Workout;
import com.fitness.backend.service.WorkoutService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/workout")
@CrossOrigin(origins = "http://localhost:5173")
public class WorkoutController {

    private final WorkoutService workoutService;

    public WorkoutController(WorkoutService workoutService) {
        this.workoutService = workoutService;
    }

    @PostMapping
    public Workout createWorkout(@RequestBody Workout workout) {
        return workoutService.saveWorkout(workout);
    }
}