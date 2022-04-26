package com.spring.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;
import net.jntoo.db.Query;

@Table(name = "zhaopinxinxi")
public class Zhaopinxinxi implements Serializable {
    @GeneratedValue(generator = "JDBC") // 自增的主键映射
    @Id
    @Column(name = "id",insertable=false)
    private Integer id;

    @Column(name = "bianhao")
    private String bianhao;
    @Column(name = "biaoti")
    private String biaoti;
    @Column(name = "tupian")
    private String tupian;
    @Column(name = "gongzi")
    private String gongzi;
    @Column(name = "xueli")
    private String xueli;
    @Column(name = "jingyan")
    private String jingyan;
    @Column(name = "zhaopinrenshu")
    private Integer zhaopinrenshu;
    @Column(name = "zhiweileixing")
    private String zhiweileixing;
    @Column(name = "gongsifuli")
    private String gongsifuli;
    @Column(name = "zhiweimiaoshu")
    private String zhiweimiaoshu;
    @Column(name = "gongzuodidian")
    private String gongzuodidian;
    @Column(name = "gongsimingcheng")
    private String gongsimingcheng;
    @Column(name = "gongsijieshao")
    private String gongsijieshao;
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

    public Long getQiuzhishenqingCount()
    {
        return Query.make("qiuzhishenqing").where("zhaopinxinxiid" , id).count();
    }
    public Long getCeshishijuanCount()
    {
        return Query.make("ceshishijuan").where("zhaopinxinxiid" , id).count();
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

    public String getTupian() {
        return tupian;
    }
    public void setTupian(String tupian) {
        this.tupian = tupian == null ? "" : tupian.trim();
    }

    public String getGongzi() {
        return gongzi;
    }
    public void setGongzi(String gongzi) {
        this.gongzi = gongzi == null ? "" : gongzi.trim();
    }

    public String getXueli() {
        return xueli;
    }
    public void setXueli(String xueli) {
        this.xueli = xueli == null ? "" : xueli.trim();
    }

    public String getJingyan() {
        return jingyan;
    }
    public void setJingyan(String jingyan) {
        this.jingyan = jingyan == null ? "" : jingyan.trim();
    }

    public Integer getZhaopinrenshu() {
        return zhaopinrenshu;
    }
    public void setZhaopinrenshu(Integer zhaopinrenshu) {
        this.zhaopinrenshu = zhaopinrenshu == null ? 0 : zhaopinrenshu;
    }

    public String getZhiweileixing() {
        return zhiweileixing;
    }
    public void setZhiweileixing(String zhiweileixing) {
        this.zhiweileixing = zhiweileixing == null ? "" : zhiweileixing.trim();
    }

    public String getGongsifuli() {
        return gongsifuli;
    }
    public void setGongsifuli(String gongsifuli) {
        this.gongsifuli = gongsifuli == null ? "" : gongsifuli.trim();
    }

    public String getZhiweimiaoshu() {
        return zhiweimiaoshu;
    }
    public void setZhiweimiaoshu(String zhiweimiaoshu) {
        this.zhiweimiaoshu = zhiweimiaoshu == null ? "" : zhiweimiaoshu.trim();
    }

    public String getGongzuodidian() {
        return gongzuodidian;
    }
    public void setGongzuodidian(String gongzuodidian) {
        this.gongzuodidian = gongzuodidian == null ? "" : gongzuodidian.trim();
    }

    public String getGongsimingcheng() {
        return gongsimingcheng;
    }
    public void setGongsimingcheng(String gongsimingcheng) {
        this.gongsimingcheng = gongsimingcheng == null ? "" : gongsimingcheng.trim();
    }

    public String getGongsijieshao() {
        return gongsijieshao;
    }
    public void setGongsijieshao(String gongsijieshao) {
        this.gongsijieshao = gongsijieshao == null ? "" : gongsijieshao.trim();
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
