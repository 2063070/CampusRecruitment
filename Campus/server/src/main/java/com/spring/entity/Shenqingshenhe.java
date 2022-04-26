package com.spring.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;
import net.jntoo.db.Query;

@Table(name = "shenqingshenhe")
public class Shenqingshenhe implements Serializable {
    @GeneratedValue(generator = "JDBC") // 自增的主键映射
    @Id
    @Column(name = "id",insertable=false)
    private Integer id;

    @Column(name = "qiuzhishenqingid")
    private Integer qiuzhishenqingid;
    @Column(name = "zhaopinxinxiid")
    private Integer zhaopinxinxiid;
    @Column(name = "bianhao")
    private String bianhao;
    @Column(name = "biaoti")
    private String biaoti;
    @Column(name = "zhiweileixing")
    private String zhiweileixing;
    @Column(name = "faburen")
    private String faburen;
    @Column(name = "shenqingren")
    private String shenqingren;
    @Column(name = "shenhezhuangtai")
    private String shenhezhuangtai;
    @Column(name = "shenhebeizhu")
    private String shenhebeizhu;
    @Column(name = "addtime")
    private String addtime;


    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }



    public Integer getQiuzhishenqingid() {
        return qiuzhishenqingid;
    }
    public void setQiuzhishenqingid(Integer qiuzhishenqingid) {
        this.qiuzhishenqingid = qiuzhishenqingid == null ? 0 : qiuzhishenqingid;
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

    public String getZhiweileixing() {
        return zhiweileixing;
    }
    public void setZhiweileixing(String zhiweileixing) {
        this.zhiweileixing = zhiweileixing == null ? "" : zhiweileixing.trim();
    }

    public String getFaburen() {
        return faburen;
    }
    public void setFaburen(String faburen) {
        this.faburen = faburen == null ? "" : faburen.trim();
    }

    public String getShenqingren() {
        return shenqingren;
    }
    public void setShenqingren(String shenqingren) {
        this.shenqingren = shenqingren == null ? "" : shenqingren.trim();
    }

    public String getShenhezhuangtai() {
        return shenhezhuangtai;
    }
    public void setShenhezhuangtai(String shenhezhuangtai) {
        this.shenhezhuangtai = shenhezhuangtai == null ? "" : shenhezhuangtai.trim();
    }

    public String getShenhebeizhu() {
        return shenhebeizhu;
    }
    public void setShenhebeizhu(String shenhebeizhu) {
        this.shenhebeizhu = shenhebeizhu == null ? "" : shenhebeizhu.trim();
    }

    public String getAddtime() {
        return addtime;
    }
    public void setAddtime(String addtime) {
        this.addtime = addtime == null ? "" : addtime.trim();
    }

}
