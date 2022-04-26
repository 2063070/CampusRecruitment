package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.JianlileixingMapper;
import com.spring.entity.Jianlileixing;
import com.spring.service.JianlileixingService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("JianlileixingService")
public class JianlileixingServiceImpl extends ServiceBase<Jianlileixing> implements JianlileixingService {
    @Resource
    private JianlileixingMapper dao;

    @Override
    protected JianlileixingMapper getDao() {
        return dao;
    }
}
