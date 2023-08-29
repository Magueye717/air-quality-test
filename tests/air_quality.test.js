const request = require('supertest');
const mongoose = require('mongoose');

let server;

describe('Iqiar ::::: Air Quality Check', () => {
    beforeEach(() => { server = require("../app") });
    
    afterEach(  () => { 
        server.close(); 
        mongoose.connection.close();
    });

    describe('GET ', () => {
        it('test status 200', async ()=>{
            const res = await request(server)
            .get('/api/v1/pollution?lat=48.2&lon=2.352222');
            expect(res.status).toBe(200);

        });
        it('test status 400, Invalid lat', async ()=>{
            const res = await request(server)
            .get('/api/v1/pollution?lat=448&lon=2.352222');
            expect(res.status).toBe(400);
        });
    });
});

