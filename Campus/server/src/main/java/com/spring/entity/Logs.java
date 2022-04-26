package com.spring.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;
import net.jntoo.db.Query;

@Table(name = "logs")
public class Logs implements Serializable {
    @GeneratedValue(generator = "JDBC") // 自增的主键映射
    @Id
    @Column(name = "id",insertable=false)
    private Integer id;

    @Column(name = "module")
    private String module;
    @Column(name = "operationtype")
    private String operationtype;
    @Column(name = "operationcontent")
    private String operationcontent;
    @Column(name = "cx")
    private String cx;
    @Column(name = "username")
    private String username;
    @Column(name = "addtime")
    private String addtime;


    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }



    public String getModule() {
        return module;
    }
    public void setModule(String module) {
        this.module = module == null ? "" : module.trim();
    }

    public String getOperationtype() {
        return operationtype;
    }
    public void setOperationtype(String operationtype) {
        this.operationtype = operationtype == null ? "" : operationtype.trim();
    }

    public String getOperationcontent() {
        return operationcontent;
    }
    public void setOperationcontent(String operationcontent) {
        this.operationcontent = operationcontent == null ? "" : operationcontent.trim();
    }

    public String getCx() {
        return cx;
    }
    public void setCx(String cx) {
        this.cx = cx == null ? "" : cx.trim();
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username == null ? "" : username.trim();
    }

    public String getAddtime() {
        return addtime;
    }
    public void setAddtime(String addtime) {
        this.addtime = addtime == null ? "" : addtime.trim();
    }

}
