package com.spring.service;

import com.base.IServiceBase;
import com.spring.entity.Gaoxiaoguanliyuan;

public interface GaoxiaoguanliyuanService extends IServiceBase<Gaoxiaoguanliyuan> {
    public Gaoxiaoguanliyuan login(String username, String password);
    public boolean updatePassword(int id, String newPassword);
}
