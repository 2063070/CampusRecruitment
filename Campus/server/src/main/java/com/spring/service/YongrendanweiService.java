package com.spring.service;

import com.base.IServiceBase;
import com.spring.entity.Yongrendanwei;

public interface YongrendanweiService extends IServiceBase<Yongrendanwei> {
    public Yongrendanwei login(String username, String password);
    public boolean updatePassword(int id, String newPassword);
}
