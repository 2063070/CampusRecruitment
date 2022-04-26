package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.ShenqingshenheMapper;
import com.spring.entity.Shenqingshenhe;
import com.spring.service.ShenqingshenheService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("ShenqingshenheService")
public class ShenqingshenheServiceImpl extends ServiceBase<Shenqingshenhe> implements ShenqingshenheService {
    @Resource
    private ShenqingshenheMapper dao;

    @Override
    protected ShenqingshenheMapper getDao() {
        return dao;
    }
}
