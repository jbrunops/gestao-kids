package com.gestaokids.dto;

import com.gestaokids.model.ActivityType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;

public class ActivityDTO {
    
    private Long id;
    
    @NotBlank
    @Size(max = 255)
    private String name;
    
    @NotNull
    private ActivityType type;
    
    @NotBlank
    @Size(max = 20)
    private String duration;
    
    private LocalDateTime startTime;
    
    private LocalDateTime endTime;
    
    @NotNull
    private LocalDate date;
    
    private Long childId;
    
    // Constructors
    public ActivityDTO() {}
    
    public ActivityDTO(String name, ActivityType type, String duration, Long childId) {
        this.name = name;
        this.type = type;
        this.duration = duration;
        this.childId = childId;
        this.date = LocalDate.now();
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public ActivityType getType() {
        return type;
    }
    
    public void setType(ActivityType type) {
        this.type = type;
    }
    
    public String getDuration() {
        return duration;
    }
    
    public void setDuration(String duration) {
        this.duration = duration;
    }
    
    public LocalDateTime getStartTime() {
        return startTime;
    }
    
    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }
    
    public LocalDateTime getEndTime() {
        return endTime;
    }
    
    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }
    
    public LocalDate getDate() {
        return date;
    }
    
    public void setDate(LocalDate date) {
        this.date = date;
    }
    
    public Long getChildId() {
        return childId;
    }
    
    public void setChildId(Long childId) {
        this.childId = childId;
    }
}
