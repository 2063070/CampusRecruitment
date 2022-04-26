package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.LogsMapper;
import com.spring.entity.Logs;
import com.spring.service.LogsService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("LogsService")
public class LogsServiceImpl extends ServiceBase<Logs> implements LogsService {
    @Resource
    private LogsMapper dao;

    @Override
    protected LogsMapper getDao() {
        return dao;
    }
}
