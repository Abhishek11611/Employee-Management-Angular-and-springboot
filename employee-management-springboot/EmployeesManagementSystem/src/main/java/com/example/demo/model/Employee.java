package com.example.demo.model;

import java.util.Date;
import jakarta.persistence.*;

@Entity
@Table(name = "emp")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "emp_code", unique = true, nullable = false, length = 10)
    private String empCode; 

    @Column(name = "emp_name", nullable = false, length = 35)
    private String empName;
 
    private String dept;

    @Temporal(TemporalType.DATE)
    private Date dateOfJoin;

    private String addr1;
    private String addr2;
    private String addr3;
    private String city;
    private String state;
    private String pinCode;
    private String contactNo1;
    private String contactNo2;

    @Column(name = "create_by")
    private String createBy;

    @Column(name = "create_time", updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createTime;

    @Column(name = "update_by")
    private String updateBy;

    @Column(name = "update_time")
    @Temporal(TemporalType.TIMESTAMP)
    private Date updateTime;

    @Column(name = "active_status", length = 1)
    private char activeStatus = 'A';

    // Automatically set createTime before inserting
    @PrePersist
    protected void onCreate() {
        this.createTime = new Date();
        this.updateTime = new Date();
    }

    // Automatically update updateTime before updating
    @PreUpdate
    protected void onUpdate() {
        this.updateTime = new Date();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getEmpCode() { return empCode; }
    public void setEmpCode(String empCode) { this.empCode = empCode; }

    public String getEmpName() { return empName; }
    public void setEmpName(String empName) { this.empName = empName; }

    public String getDept() { return dept; }
    public void setDept(String dept) { this.dept = dept; }

    public Date getDateOfJoin() { return dateOfJoin; }
    public void setDateOfJoin(Date dateOfJoin) { this.dateOfJoin = dateOfJoin; }

    public String getAddr1() { return addr1; }
    public void setAddr1(String addr1) { this.addr1 = addr1; }

    public String getAddr2() { return addr2; }
    public void setAddr2(String addr2) { this.addr2 = addr2; }

    public String getAddr3() { return addr3; }
    public void setAddr3(String addr3) { this.addr3 = addr3; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }

    public String getPinCode() { return pinCode; }
    public void setPinCode(String pinCode) { this.pinCode = pinCode; }

    public String getContactNo1() { return contactNo1; }
    public void setContactNo1(String contactNo1) { this.contactNo1 = contactNo1; }

    public String getContactNo2() { return contactNo2; }
    public void setContactNo2(String contactNo2) { this.contactNo2 = contactNo2; }

    public String getCreateBy() { return createBy; }
    public void setCreateBy(String createBy) { this.createBy = createBy; }

    public Date getCreateTime() { return createTime; }
    public void setCreateTime(Date createTime) { this.createTime = createTime; }

    public String getUpdateBy() { return updateBy; }
    public void setUpdateBy(String updateBy) { this.updateBy = updateBy; }

    public Date getUpdateTime() { return updateTime; }
    public void setUpdateTime(Date updateTime) { this.updateTime = updateTime; }

    public char getActiveStatus() { return activeStatus; }
    public void setActiveStatus(char activeStatus) { this.activeStatus = activeStatus; }
}
