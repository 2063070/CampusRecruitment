package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.GaoxiaoguanliyuanMapper;
import com.spring.entity.Gaoxiaoguanliyuan;
import com.spring.service.GaoxiaoguanliyuanService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("GaoxiaoguanliyuanService")
public class GaoxiaoguanliyuanServiceImpl extends ServiceBase<Gaoxiaoguanliyuan> implements GaoxiaoguanliyuanService {
    @Resource
    private GaoxiaoguanliyuanMapper dao;

    @Override
    protected GaoxiaoguanliyuanMapper getDao() {
        return dao;
    }
    public Gaoxiaoguanliyuan login(String username, String password) {
        Gaoxiaoguanliyuan user = new Gaoxiaoguanliyuan();
        user.setZhanghao(username);
            user.setMima(password);

        return this.dao.login(user);
    }

    public boolean updatePassword(int id, String newPassword) {
        Gaoxiaoguanliyuan user = new Gaoxiaoguanliyuan();
        user.setId(id);
            user.setMima(newPassword);
        int i = this.dao.updateByPrimaryKeySelective(user);
        return i == 1;
    }
}
