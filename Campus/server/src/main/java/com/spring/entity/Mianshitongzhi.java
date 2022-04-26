package com.spring.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;
import net.jntoo.db.Query;

@Table(name = "mianshitongzhi")
public class Mianshitongzhi implements Serializable {
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
    @Column(name = "mianshishijian")
    private String mianshishijian;
    @Column(name = "mianshididian")
    private String mianshididian;
    @Column(name = "mianshiyaoqiu")
    private String mianshiyaoqiu;
    @Column(name = "addtime")
    private String addtime;


    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Long getMianshijieguoCount()
    {
        return Query.make("mianshijieguo").where("mianshitongzhiid" , id).count();
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

    public String getMianshishijian() {
        return mianshishijian;
    }
    public void setMianshishijian(String mianshishijian) {
        this.mianshishijian = mianshishijian == null ? "" : mianshishijian.trim();
    }

    public String getMianshididian() {
        return mianshididian;
    }
    public void setMianshididian(String mianshididian) {
        this.mianshididian = mianshididian == null ? "" : mianshididian.trim();
    }

    public String getMianshiyaoqiu() {
        return mianshiyaoqiu;
    }
    public void setMianshiyaoqiu(String mianshiyaoqiu) {
        this.mianshiyaoqiu = mianshiyaoqiu == null ? "" : mianshiyaoqiu.trim();
    }

    public String getAddtime() {
        return addtime;
    }
    public void setAddtime(String addtime) {
        this.addtime = addtime == null ? "" : addtime.trim();
    }

}
