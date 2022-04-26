package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.LeixingMapper;
import com.spring.entity.Leixing;
import com.spring.service.LeixingService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("LeixingService")
public class LeixingServiceImpl extends ServiceBase<Leixing> implements LeixingService {
    @Resource
    private LeixingMapper dao;

    @Override
    protected LeixingMapper getDao() {
        return dao;
    }
}
