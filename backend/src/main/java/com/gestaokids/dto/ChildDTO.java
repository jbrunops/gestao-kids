package com.gestaokids.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Max;

public class ChildDTO {
    
    private Long id;
    
    @NotBlank
    @Size(max = 100)
    private String name;
    
    @NotNull
    @Min(1)
    @Max(18)
    private Integer age;
    
    private String avatar;
    
    private Boolean allowStudy = true;
    
    private Boolean allowFun = true;
    
    private String studyTimeToday = "0h 0m";
    
    private String funTimeToday = "0h 0m";
    
    private Long parentId;
    
    // Constructors
    public ChildDTO() {}
    
    public ChildDTO(String name, Integer age, Long parentId) {
        this.name = name;
        this.age = age;
        this.parentId = parentId;
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
    
    public Long getParentId() {
        return parentId;
    }
    
    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }
}
