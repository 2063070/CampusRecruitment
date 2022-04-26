package com.spring.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;
import net.jntoo.db.Query;

@Table(name = "liaotianjilu")
public class Liaotianjilu implements Serializable {
    @GeneratedValue(generator = "JDBC") // 自增的主键映射
    @Id
    @Column(name = "id",insertable=false)
    private Integer id;

    @Column(name = "jiaoliuid")
    private Integer jiaoliuid;
    @Column(name = "liaotiantongdao")
    private String liaotiantongdao;
    @Column(name = "neirong")
    private String neirong;
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



    public Integer getJiaoliuid() {
        return jiaoliuid;
    }
    public void setJiaoliuid(Integer jiaoliuid) {
        this.jiaoliuid = jiaoliuid == null ? 0 : jiaoliuid;
    }

    public String getLiaotiantongdao() {
        return liaotiantongdao;
    }
    public void setLiaotiantongdao(String liaotiantongdao) {
        this.liaotiantongdao = liaotiantongdao == null ? "" : liaotiantongdao.trim();
    }

    public String getNeirong() {
        return neirong;
    }
    public void setNeirong(String neirong) {
        this.neirong = neirong == null ? "" : neirong.trim();
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
