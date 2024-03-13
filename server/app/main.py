from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from app.api import notes, ping
from app.db import engine, metadata, database

metadata.create_all(engine)

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:5173",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["DELETE", "GET", "POST", "PUT"],
    allow_headers=["*"],
)



def getContractAddress(project_id, supabase_url, supabase_key):
    # Initialize Supabase client
    client = supabase.create_client(supabase_url, supabase_key)

    # Query to fetch contract address based on project_id
    query = f"""
        select contract_address from campaigns
        where id = '{project_id}'
    """

    response = client.from_query(query).execute()

    if response["status"] == 200:
        contract_address = response["data"][0]["contract_address"]
        return contract_address
    else:
        print("Failed to fetch contract address:", response["error"])

@app.get("/check_interaction/")
async def check_interaction(project_id: str = Query(..., description="Project ID"),
                            wallet_address: str = Query(..., description="Wallet address")):
    contract_address = getContractAddress(project_id)
    if not contract_address:
        return {"message": "Project ID not found"}

    interaction_status = hasInteracted(wallet_address, contract_address)
    return {"interaction": interaction_status}

@asynccontextmanager
async def db():
    try:
        print("Starting up...")
        yield
    finally:
        print("Shutting down...")


app.include_router(ping.router)