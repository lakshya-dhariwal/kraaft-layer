async def hasInteracted(wallet_address, contract_address):
    # Mock PowerloomSnapshotProcessMessage object with appropriate attributes
    class PowerloomSnapshotProcessMessageMock:
        def __init__(self, begin, end, epoch_id):
            self.begin = begin
            self.end = end
            self.epoch_id = epoch_id

    # Mock RpcHelper
    rpc_helper = RpcHelper()

    # Create a mock epoch
    mock_epoch = PowerloomSnapshotProcessMessageMock(begin=1, end=1, epoch_id="mock_epoch_id")

    # Instantiate asyncio Redis connection
    redis_conn = await aioredis.create_redis_pool(('localhost', 6379))

    # Call the compute method of the processor
    snapshots = await processor.compute(mock_epoch, redis_conn, rpc_helper)

    # Check if the wallet has interacted with the contract address
    for _, snapshot in snapshots:
        if snapshot.wallet_address == wallet_address and snapshot.contract_address == contract_address:
            return True

    return False