package com.spring.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;
import net.jntoo.db.Query;

@Table(name = "gaoxiaoxinxi")
public class Gaoxiaoxinxi implements Serializable {
    @GeneratedValue(generator = "JDBC") // 自增的主键映射
    @Id
    @Column(name = "id",insertable=false)
    private Integer id;

    @Column(name = "bianhao")
    private String bianhao;
    @Column(name = "gaoxiaomingcheng")
    private String gaoxiaomingcheng;
    @Column(name = "tupian")
    private String tupian;
    @Column(name = "gaoxiaodizhi")
    private String gaoxiaodizhi;
    @Column(name = "gaoxiaofuzeren")
    private String gaoxiaofuzeren;
    @Column(name = "lianxidianhua")
    private String lianxidianhua;
    @Column(name = "gaoxiaoxiangqing")
    private String gaoxiaoxiangqing;
    @Column(name = "faburen")
    private String faburen;
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



    public String getBianhao() {
        return bianhao;
    }
    public void setBianhao(String bianhao) {
        this.bianhao = bianhao == null ? "" : bianhao.trim();
    }

    public String getGaoxiaomingcheng() {
        return gaoxiaomingcheng;
    }
    public void setGaoxiaomingcheng(String gaoxiaomingcheng) {
        this.gaoxiaomingcheng = gaoxiaomingcheng == null ? "" : gaoxiaomingcheng.trim();
    }

    public String getTupian() {
        return tupian;
    }
    public void setTupian(String tupian) {
        this.tupian = tupian == null ? "" : tupian.trim();
    }

    public String getGaoxiaodizhi() {
        return gaoxiaodizhi;
    }
    public void setGaoxiaodizhi(String gaoxiaodizhi) {
        this.gaoxiaodizhi = gaoxiaodizhi == null ? "" : gaoxiaodizhi.trim();
    }

    public String getGaoxiaofuzeren() {
        return gaoxiaofuzeren;
    }
    public void setGaoxiaofuzeren(String gaoxiaofuzeren) {
        this.gaoxiaofuzeren = gaoxiaofuzeren == null ? "" : gaoxiaofuzeren.trim();
    }

    public String getLianxidianhua() {
        return lianxidianhua;
    }
    public void setLianxidianhua(String lianxidianhua) {
        this.lianxidianhua = lianxidianhua == null ? "" : lianxidianhua.trim();
    }

    public String getGaoxiaoxiangqing() {
        return gaoxiaoxiangqing;
    }
    public void setGaoxiaoxiangqing(String gaoxiaoxiangqing) {
        this.gaoxiaoxiangqing = gaoxiaoxiangqing == null ? "" : gaoxiaoxiangqing.trim();
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
    public String getIssh() {
        return issh;
    }
    public void setIssh(String issh) {
        this.issh = issh == null ? "" : issh.trim();
    }

}
