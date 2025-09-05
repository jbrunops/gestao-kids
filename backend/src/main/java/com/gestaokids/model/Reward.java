package com.gestaokids.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import java.time.LocalDateTime;

@Entity
@Table(name = "rewards")
public class Reward {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank
    @Size(max = 255)
    @Column(name = "title")
    private String title;
    
    @NotBlank
    @Column(name = "description", columnDefinition = "TEXT")
    private String description;
    
    @NotBlank
    @Size(max = 10)
    @Column(name = "icon")
    private String icon;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "category")
    private RewardCategory category;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private RewardStatus status;
    
    @NotNull
    @Positive
    @Column(name = "points_required")
    private Integer pointsRequired;
    
    @NotNull
    @Positive
    @Column(name = "max_uses")
    private Integer maxUses = 1;
    
    @NotNull
    @Column(name = "current_uses")
    private Integer currentUses = 0;
    
    @Column(name = "earned_at")
    private LocalDateTime earnedAt;
    
    @Column(name = "redeemed_at")
    private LocalDateTime redeemedAt;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "child_id")
    private Child child;
    
    // Constructors
    public Reward() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.status = RewardStatus.AVAILABLE;
    }
    
    public Reward(String title, String description, String icon, RewardCategory category, 
                  Integer pointsRequired, Child child) {
        this();
        this.title = title;
        this.description = description;
        this.icon = icon;
        this.category = category;
        this.pointsRequired = pointsRequired;
        this.child = child;
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
    
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    
    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
    
    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
    
    public Child getChild() {
        return child;
    }
    
    public void setChild(Child child) {
        this.child = child;
    }
    
    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
