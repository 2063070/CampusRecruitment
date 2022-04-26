package com.spring.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;
import net.jntoo.db.Query;

@Table(name = "ceshishiti")
public class Ceshishiti implements Serializable {
    @GeneratedValue(generator = "JDBC") // 自增的主键映射
    @Id
    @Column(name = "id",insertable=false)
    private Integer id;

    @Column(name = "ceshishijuanid")
    private Integer ceshishijuanid;
    @Column(name = "bianhao")
    private String bianhao;
    @Column(name = "biaoti")
    private String biaoti;
    @Column(name = "mingcheng")
    private String mingcheng;
    @Column(name = "shititimu")
    private String shititimu;
    @Column(name = "leixing")
    private String leixing;
    @Column(name = "daan")
    private String daan;
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



    public Integer getCeshishijuanid() {
        return ceshishijuanid;
    }
    public void setCeshishijuanid(Integer ceshishijuanid) {
        this.ceshishijuanid = ceshishijuanid == null ? 0 : ceshishijuanid;
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

    public String getShititimu() {
        return shititimu;
    }
    public void setShititimu(String shititimu) {
        this.shititimu = shititimu == null ? "" : shititimu.trim();
    }

    public String getLeixing() {
        return leixing;
    }
    public void setLeixing(String leixing) {
        this.leixing = leixing == null ? "" : leixing.trim();
    }

    public String getDaan() {
        return daan;
    }
    public void setDaan(String daan) {
        this.daan = daan == null ? "" : daan.trim();
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
