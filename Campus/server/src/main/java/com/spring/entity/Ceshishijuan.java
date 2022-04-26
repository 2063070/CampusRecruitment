package com.spring.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;
import net.jntoo.db.Query;

@Table(name = "ceshishijuan")
public class Ceshishijuan implements Serializable {
    @GeneratedValue(generator = "JDBC") // 自增的主键映射
    @Id
    @Column(name = "id",insertable=false)
    private Integer id;

    @Column(name = "zhaopinxinxiid")
    private Integer zhaopinxinxiid;
    @Column(name = "bianhao")
    private String bianhao;
    @Column(name = "biaoti")
    private String biaoti;
    @Column(name = "mingcheng")
    private String mingcheng;
    @Column(name = "kaoshishizhang")
    private Integer kaoshishizhang;
    @Column(name = "faburen")
    private String faburen;
    @Column(name = "addtime")
    private String addtime;


    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Long getCeshishitiCount()
    {
        return Query.make("ceshishiti").where("ceshishijuanid" , id).count();
    }
    public Long getCeshijieguoCount()
    {
        return Query.make("ceshijieguo").where("ceshishijuanid" , id).count();
    }
    public Long getCeshichengjiCount()
    {
        return Query.make("ceshichengji").where("ceshishijuanid" , id).count();
    }


    public Integer getZhaopinxinxiid() {
        return zhaopinxinxiid;
    }
    public void setZhaopinxinxiid(Integer zhaopinxinxiid) {
        this.zhaopinxinxiid = zhaopinxinxiid == null ? 0 : zhaopinxinxiid;
    }

    public String getBianhao() {
        return bianhao;
    }
    public void setBianhao(String bianhao) {
        this.bianhao = bianhao == null ? "" : bianhao.trim();
    }

    public String getBiaoti() {
        return biaoti;
    }
    public void setBiaoti(String biaoti) {
        this.biaoti = biaoti == null ? "" : biaoti.trim();
    }

    public String getMingcheng() {
        return mingcheng;
    }
    public void setMingcheng(String mingcheng) {
        this.mingcheng = mingcheng == null ? "" : mingcheng.trim();
    }

    public Integer getKaoshishizhang() {
        return kaoshishizhang;
    }
    public void setKaoshishizhang(Integer kaoshishizhang) {
        this.kaoshishizhang = kaoshishizhang == null ? 0 : kaoshishizhang;
    }

    public String getFaburen() {
        return faburen;
    }
    public void setFaburen(String faburen) {
        this.faburen = faburen == null ? "" : faburen.trim();
    }

    public String getAddtime() {
        return addtime;
    }
    public void setAddtime(String addtime) {
        this.addtime = addtime == null ? "" : addtime.trim();
    }

}
