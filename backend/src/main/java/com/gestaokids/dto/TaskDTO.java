package com.gestaokids.dto;

import com.gestaokids.model.TaskPriority;
import com.gestaokids.model.TaskStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class TaskDTO {
    
    private Long id;
    
    @NotBlank
    @Size(max = 255)
    private String title;
    
    private String description;
    
    @NotNull
    private TaskPriority priority;
    
    private TaskStatus status = TaskStatus.PENDING;
    
    private Long childId;
    
    // Constructors
    public TaskDTO() {}
    
    public TaskDTO(String title, String description, TaskPriority priority, Long childId) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.childId = childId;
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public TaskPriority getPriority() {
        return priority;
    }
    
    public void setPriority(TaskPriority priority) {
        this.priority = priority;
    }
    
    public TaskStatus getStatus() {
        return status;
    }
    
    public void setStatus(TaskStatus status) {
        this.status = status;
    }
    
    public Long getChildId() {
        return childId;
    }
    
    public void setChildId(Long childId) {
        this.childId = childId;
    }
}
