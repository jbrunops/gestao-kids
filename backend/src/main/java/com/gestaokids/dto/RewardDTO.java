package com.gestaokids.dto;

import com.gestaokids.model.RewardCategory;
import com.gestaokids.model.RewardStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import java.time.LocalDateTime;

public class RewardDTO {
    
    private Long id;
    
    @NotBlank
    @Size(max = 255)
    private String title;
    
    @NotBlank
    private String description;
    
    @NotBlank
    @Size(max = 10)
    private String icon;
    
    @NotNull
    private RewardCategory category;
    
    private RewardStatus status = RewardStatus.AVAILABLE;
    
    @NotNull
    @Positive
    private Integer pointsRequired;
    
    @NotNull
    @Positive
    private Integer maxUses = 1;
    
    private Integer currentUses = 0;
    
    private LocalDateTime earnedAt;
    
    private LocalDateTime redeemedAt;
    
    private Long childId;
    
    // Constructors
    public RewardDTO() {}
    
    public RewardDTO(String title, String description, String icon, RewardCategory category, 
                     Integer pointsRequired, Long childId) {
        this.title = title;
        this.description = description;
        this.icon = icon;
        this.category = category;
        this.pointsRequired = pointsRequired;
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
    
    public String getIcon() {
        return icon;
    }
    
    public void setIcon(String icon) {
        this.icon = icon;
    }
    
    public RewardCategory getCategory() {
        return category;
    }
    
    public void setCategory(RewardCategory category) {
        this.category = category;
    }
    
    public RewardStatus getStatus() {
        return status;
    }
    
    public void setStatus(RewardStatus status) {
        this.status = status;
    }
    
    public Integer getPointsRequired() {
        return pointsRequired;
    }
    
    public void setPointsRequired(Integer pointsRequired) {
        this.pointsRequired = pointsRequired;
    }
    
    public Integer getMaxUses() {
        return maxUses;
    }
    
    public void setMaxUses(Integer maxUses) {
        this.maxUses = maxUses;
    }
    
    public Integer getCurrentUses() {
        return currentUses;
    }
    
    public void setCurrentUses(Integer currentUses) {
        this.currentUses = currentUses;
    }
    
    public LocalDateTime getEarnedAt() {
        return earnedAt;
    }
    
    public void setEarnedAt(LocalDateTime earnedAt) {
        this.earnedAt = earnedAt;
    }
    
    public LocalDateTime getRedeemedAt() {
        return redeemedAt;
    }
    
    public void setRedeemedAt(LocalDateTime redeemedAt) {
        this.redeemedAt = redeemedAt;
    }
    
    public Long getChildId() {
        return childId;
    }
    
    public void setChildId(Long childId) {
        this.childId = childId;
    }
}
