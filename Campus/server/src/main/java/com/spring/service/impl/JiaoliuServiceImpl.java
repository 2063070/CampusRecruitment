package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.JiaoliuMapper;
import com.spring.entity.Jiaoliu;
import com.spring.service.JiaoliuService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("JiaoliuService")
public class JiaoliuServiceImpl extends ServiceBase<Jiaoliu> implements JiaoliuService {
    @Resource
    private JiaoliuMapper dao;

    @Override
    protected JiaoliuMapper getDao() {
        return dao;
    }
}
