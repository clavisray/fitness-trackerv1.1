package com.fitness.backend.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "workout")
public class Workout {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private UUID userId;

    private String title;

    @Column(name = "workout_type")
    private String workoutType;

    @Column(name = "is_done")
    private Boolean isDone;

    private String notes;

    private Integer duration;

    @Column(name = "event_date")
    private LocalDate eventDate;

    @Column(name = "done_date")
    private OffsetDateTime doneDate;

    public Workout() {
    }

    /* === Getters and setters === */

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getWorkoutType() {
        return workoutType;
    }

    public void setWorkoutType(String workoutType) {
        this.workoutType = workoutType;
    }

    public Boolean getDone() {
        return isDone;
    }

    public void setDone(Boolean done) {
        isDone = done;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public LocalDate getEventDate() {
        return eventDate;
    }

    public void setEventDate(LocalDate eventDate) {
        this.eventDate = eventDate;
    }

    public OffsetDateTime getDoneDate() {
        return doneDate;
    }

    public void setDoneDate(OffsetDateTime doneDate) {
        this.doneDate = doneDate;
    }
}