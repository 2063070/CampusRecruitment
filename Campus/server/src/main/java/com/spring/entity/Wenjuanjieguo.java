package com.spring.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;
import net.jntoo.db.Query;

@Table(name = "wenjuanjieguo")
public class Wenjuanjieguo implements Serializable {
    @GeneratedValue(generator = "JDBC") // 自增的主键映射
    @Id
    @Column(name = "id",insertable=false)
    private Integer id;

    @Column(name = "diaochawenjuanid")
    private Integer diaochawenjuanid;
    @Column(name = "bianhao")
    private String bianhao;
    @Column(name = "mingcheng")
    private String mingcheng;
    @Column(name = "faburen")
    private String faburen;
    @Column(name = "datibianhao")
    private String datibianhao;
    @Column(name = "datishichang")
    private String datishichang;
    @Column(name = "zongdefen")
    private Integer zongdefen;
    @Column(name = "datiren")
    private String datiren;
    @Column(name = "addtime")
    private String addtime;


    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }



    public Integer getDiaochawenjuanid() {
        return diaochawenjuanid;
    }
    public void setDiaochawenjuanid(Integer diaochawenjuanid) {
        this.diaochawenjuanid = diaochawenjuanid == null ? 0 : diaochawenjuanid;
    }

    public String getBianhao() {
        return bianhao;
    }
    public void setBianhao(String bianhao) {
        this.bianhao = bianhao == null ? "" : bianhao.trim();
    }

    public String getMingcheng() {
        return mingcheng;
    }
    public void setMingcheng(String mingcheng) {
        this.mingcheng = mingcheng == null ? "" : mingcheng.trim();
    }

    public String getFaburen() {
        return faburen;
    }
    public void setFaburen(String faburen) {
        this.faburen = faburen == null ? "" : faburen.trim();
    }

    public String getDatibianhao() {
        return datibianhao;
    }
    public void setDatibianhao(String datibianhao) {
        this.datibianhao = datibianhao == null ? "" : datibianhao.trim();
    }

    public String getDatishichang() {
        return datishichang;
    }
    public void setDatishichang(String datishichang) {
        this.datishichang = datishichang == null ? "" : datishichang.trim();
    }

    public Integer getZongdefen() {
        return zongdefen;
    }
    public void setZongdefen(Integer zongdefen) {
        this.zongdefen = zongdefen == null ? 0 : zongdefen;
    }

    public String getDatiren() {
        return datiren;
    }
    public void setDatiren(String datiren) {
        this.datiren = datiren == null ? "" : datiren.trim();
    }

    public String getAddtime() {
        return addtime;
    }
    public void setAddtime(String addtime) {
        this.addtime = addtime == null ? "" : addtime.trim();
    }

}
