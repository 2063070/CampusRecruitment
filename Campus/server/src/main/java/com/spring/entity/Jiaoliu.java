package com.spring.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;
import net.jntoo.db.Query;

@Table(name = "jiaoliu")
public class Jiaoliu implements Serializable {
    @GeneratedValue(generator = "JDBC") // 自增的主键映射
    @Id
    @Column(name = "id",insertable=false)
    private Integer id;

    @Column(name = "liaotiantongdao")
    private String liaotiantongdao;
    @Column(name = "biaoti")
    private String biaoti;
    @Column(name = "shouxinren")
    private String shouxinren;
    @Column(name = "faxinren")
    private String faxinren;
    @Column(name = "addtime")
    private String addtime;


    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Long getLiaotianjiluCount()
    {
        return Query.make("liaotianjilu").where("jiaoliuid" , id).count();
    }


    public String getLiaotiantongdao() {
        return liaotiantongdao;
    }
    public void setLiaotiantongdao(String liaotiantongdao) {
        this.liaotiantongdao = liaotiantongdao == null ? "" : liaotiantongdao.trim();
    }

    public String getBiaoti() {
        return biaoti;
    }
    public void setBiaoti(String biaoti) {
        this.biaoti = biaoti == null ? "" : biaoti.trim();
    }

    public String getShouxinren() {
        return shouxinren;
    }
    public void setShouxinren(String shouxinren) {
        this.shouxinren = shouxinren == null ? "" : shouxinren.trim();
    }

    public String getFaxinren() {
        return faxinren;
    }
    public void setFaxinren(String faxinren) {
        this.faxinren = faxinren == null ? "" : faxinren.trim();
    }

    public String getAddtime() {
        return addtime;
    }
    public void setAddtime(String addtime) {
        this.addtime = addtime == null ? "" : addtime.trim();
    }

}
