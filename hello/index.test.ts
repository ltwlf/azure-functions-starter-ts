import httpTrigger from './index'

const context =  { log: jest.fn() } as any

test('Hello schould return greeting', async () => {

    const request = {
        query: { name: 'Chris' }
    };

    await httpTrigger(context, request)

    expect(context.log.mock.calls.length).toBe(1)
    expect(context.res.body).toEqual('Hello Chris')
});