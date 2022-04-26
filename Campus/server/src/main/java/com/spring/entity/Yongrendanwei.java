package com.spring.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;
import net.jntoo.db.Query;

@Table(name = "yongrendanwei")
public class Yongrendanwei implements Serializable {
    @GeneratedValue(generator = "JDBC") // 自增的主键映射
    @Id
    @Column(name = "id",insertable=false)
    private Integer id;

    @Column(name = "zhanghao")
    private String zhanghao;
    @Column(name = "mima")
    private String mima;
    @Column(name = "danweimingcheng")
    private String danweimingcheng;
    @Column(name = "fuzeren")
    private String fuzeren;
    @Column(name = "lianxidianhua")
    private String lianxidianhua;
    @Column(name = "danweidizhi")
    private String danweidizhi;
    @Column(name = "zizhizhengming")
    private String zizhizhengming;
    @Column(name = "addtime")
    private String addtime;
    private String issh;


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

    public String getDanweimingcheng() {
        return danweimingcheng;
    }
    public void setDanweimingcheng(String danweimingcheng) {
        this.danweimingcheng = danweimingcheng == null ? "" : danweimingcheng.trim();
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

    public String getDanweidizhi() {
        return danweidizhi;
    }
    public void setDanweidizhi(String danweidizhi) {
        this.danweidizhi = danweidizhi == null ? "" : danweidizhi.trim();
    }

    public String getZizhizhengming() {
        return zizhizhengming;
    }
    public void setZizhizhengming(String zizhizhengming) {
        this.zizhizhengming = zizhizhengming == null ? "" : zizhizhengming.trim();
    }

    public String getAddtime() {
        return addtime;
    }
    public void setAddtime(String addtime) {
        this.addtime = addtime == null ? "" : addtime.trim();
    }
    public String getIssh() {
        return issh;
    }
    public void setIssh(String issh) {
        this.issh = issh == null ? "" : issh.trim();
    }

}
