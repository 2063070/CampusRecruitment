package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.YongrendanweiMapper;
import com.spring.entity.Yongrendanwei;
import com.spring.service.YongrendanweiService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("YongrendanweiService")
public class YongrendanweiServiceImpl extends ServiceBase<Yongrendanwei> implements YongrendanweiService {
    @Resource
    private YongrendanweiMapper dao;

    @Override
    protected YongrendanweiMapper getDao() {
        return dao;
    }
    public Yongrendanwei login(String username, String password) {
        Yongrendanwei user = new Yongrendanwei();
        user.setZhanghao(username);
            user.setMima(password);

        return this.dao.login(user);
    }

    public boolean updatePassword(int id, String newPassword) {
        Yongrendanwei user = new Yongrendanwei();
        user.setId(id);
            user.setMima(newPassword);
        int i = this.dao.updateByPrimaryKeySelective(user);
        return i == 1;
    }
}
