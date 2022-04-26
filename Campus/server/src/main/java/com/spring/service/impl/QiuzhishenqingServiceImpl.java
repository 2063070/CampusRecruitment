package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.QiuzhishenqingMapper;
import com.spring.entity.Qiuzhishenqing;
import com.spring.service.QiuzhishenqingService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("QiuzhishenqingService")
public class QiuzhishenqingServiceImpl extends ServiceBase<Qiuzhishenqing> implements QiuzhishenqingService {
    @Resource
    private QiuzhishenqingMapper dao;

    @Override
    protected QiuzhishenqingMapper getDao() {
        return dao;
    }
}
