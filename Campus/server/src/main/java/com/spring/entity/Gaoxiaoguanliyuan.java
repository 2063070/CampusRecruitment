package com.spring.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;
import net.jntoo.db.Query;

@Table(name = "gaoxiaoguanliyuan")
public class Gaoxiaoguanliyuan implements Serializable {
    @GeneratedValue(generator = "JDBC") // 自增的主键映射
    @Id
    @Column(name = "id",insertable=false)
    private Integer id;

    @Column(name = "zhanghao")
    private String zhanghao;
    @Column(name = "mima")
    private String mima;
    @Column(name = "gaoxiaomingcheng")
    private String gaoxiaomingcheng;
    @Column(name = "fuzeren")
    private String fuzeren;
    @Column(name = "lianxidianhua")
    private String lianxidianhua;
    @Column(name = "gaoxiaodizhi")
    private String gaoxiaodizhi;
    @Column(name = "gaoxiaotupian")
    private String gaoxiaotupian;
    @Column(name = "addtime")
    private String addtime;


    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }



    public String getZhanghao() {
        return zhanghao;
    }
    public void setZhanghao(String zhanghao) {
        this.zhanghao = zhanghao == null ? "" : zhanghao.trim();
    }

    public String getMima() {
        return mima;
    }
    public void setMima(String mima) {
        this.mima = mima == null ? "" : mima.trim();
    }

    public String getGaoxiaomingcheng() {
        return gaoxiaomingcheng;
    }
    public void setGaoxiaomingcheng(String gaoxiaomingcheng) {
        this.gaoxiaomingcheng = gaoxiaomingcheng == null ? "" : gaoxiaomingcheng.trim();
    }

    public String getFuzeren() {
        return fuzeren;
    }
    public void setFuzeren(String fuzeren) {
        this.fuzeren = fuzeren == null ? "" : fuzeren.trim();
    }

    public String getLianxidianhua() {
        return lianxidianhua;
    }
    public void setLianxidianhua(String lianxidianhua) {
        this.lianxidianhua = lianxidianhua == null ? "" : lianxidianhua.trim();
    }

    public String getGaoxiaodizhi() {
        return gaoxiaodizhi;
    }
    public void setGaoxiaodizhi(String gaoxiaodizhi) {
        this.gaoxiaodizhi = gaoxiaodizhi == null ? "" : gaoxiaodizhi.trim();
    }

    public String getGaoxiaotupian() {
        return gaoxiaotupian;
    }
    public void setGaoxiaotupian(String gaoxiaotupian) {
        this.gaoxiaotupian = gaoxiaotupian == null ? "" : gaoxiaotupian.trim();
    }

    public String getAddtime() {
        return addtime;
    }
    public void setAddtime(String addtime) {
        this.addtime = addtime == null ? "" : addtime.trim();
    }

}
