package com.gestaokids.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Max;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "children")
public class Child {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank
    @Size(max = 100)
    @Column(name = "name")
    private String name;
    
    @NotNull
    @Min(1)
    @Max(18)
    @Column(name = "age")
    private Integer age;
    
    @Column(name = "avatar")
    private String avatar;
    
    @Column(name = "allow_study")
    private Boolean allowStudy = true;
    
    @Column(name = "allow_fun")
    private Boolean allowFun = true;
    
    @Column(name = "study_time_today")
    private String studyTimeToday = "0h 0m";
    
    @Column(name = "fun_time_today")
    private String funTimeToday = "0h 0m";
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private User parent;
    
    @OneToMany(mappedBy = "child", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Activity> activities;
    
    @OneToMany(mappedBy = "child", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Task> tasks;
    
    // Constructors
    public Child() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
    
    public Child(String name, Integer age, User parent) {
        this();
        this.name = name;
        this.age = age;
        this.parent = parent;
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
    
    public Integer getAge() {
        return age;
    }
    
    public void setAge(Integer age) {
        this.age = age;
    }
    
    public String getAvatar() {
        return avatar;
    }
    
    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
    
    public Boolean getAllowStudy() {
        return allowStudy;
    }
    
    public void setAllowStudy(Boolean allowStudy) {
        this.allowStudy = allowStudy;
    }
    
    public Boolean getAllowFun() {
        return allowFun;
    }
    
    public void setAllowFun(Boolean allowFun) {
        this.allowFun = allowFun;
    }
    
    public String getStudyTimeToday() {
        return studyTimeToday;
    }
    
    public void setStudyTimeToday(String studyTimeToday) {
        this.studyTimeToday = studyTimeToday;
    }
    
    public String getFunTimeToday() {
        return funTimeToday;
    }
    
    public void setFunTimeToday(String funTimeToday) {
        this.funTimeToday = funTimeToday;
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
    
    public User getParent() {
        return parent;
    }
    
    public void setParent(User parent) {
        this.parent = parent;
    }
    
    public List<Activity> getActivities() {
        return activities;
    }
    
    public void setActivities(List<Activity> activities) {
        this.activities = activities;
    }
    
    public List<Task> getTasks() {
        return tasks;
    }
    
    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }
    
    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
