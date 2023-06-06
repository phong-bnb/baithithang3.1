const BaseModel = require('./base.model')

class HomeStayModel extends BaseModel {
    async getAllHomestay() {
        let sql = `SELECT h.id, h.name, h.price, c.nameCity FROM Homestay as h
        join City as c on h.idCity = c.idCity`;
        return await this.querySql(sql);
    }

    async getDetailHomestay(id) {
        let sql = `SELECT h.id, h.name, h.num_bedroom, h.num_badroom, h.price, h.descript, h.idCity, c.nameCity FROM Homestay as h
        JOIN City as c on h.idCity = c.idCity WHERE h.id = ${id}`;
        return await this.querySql(sql);
    }

    async addHomeStay(name, idCity, num_bedroom, num_badroom, price, descript) {
        let sql = `INSERT INTO Homestay (name, idCity, num_bedroom, num_badroom, price, descript) VALUES
        ('${name}', ${idCity}, ${num_bedroom}, ${num_badroom}, ${price}, '${descript}')`;
        await this.querySql(sql);
    }

    async updateHomestay(id, name, idCity, num_bedroom, num_badroom, price, descript) {
        let sql = `UPDATE Homestay
        SET name = '${name}', idCity = ${idCity}, num_bedroom = ${num_bedroom},
        num_badroom = ${num_badroom}, price = ${price}, descript = '${descript}'
        WHERE id = ${id}`;
        await this.querySql(sql);
    }

    async deleteHomestay(id) {
        let sql = `DELETE FROM Homestay WHERE id = ${id}`;
        await this.querySql(sql);
    }
}

module.exports = new HomeStayModel;