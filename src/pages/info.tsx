import Layout from "@/layout/Layout";
import { getMarketplaceContract, getNFTContract } from "@/util/getContracts";
import { Metadata } from "@/util/types/metadata";
import { useContractMetadata } from "@thirdweb-dev/react";
import ContractMetadata from "@/components/ContractMetadata";

export default function Info() {
  const { marketplace } = getMarketplaceContract();
  const { nft_contract } = getNFTContract();

  const { data: marketplace_metadata, isLoading: marketMetadataLoading } =
    useContractMetadata(marketplace);
  const { data: nft_metadata, isLoading: nftMetadataLoading } =
    useContractMetadata(nft_contract);

  return (
    <Layout>
      <div>
        <h1 className="text-6xl font-semibold my-4 text-center">
          Contract Details
        </h1>
      </div>
      {nftMetadataLoading ||
        (marketMetadataLoading && (
          <div className="text">Loading contract info ...</div>
        ))}
      {marketplace_metadata && (
        <ContractMetadata
          metadata={marketplace_metadata as Metadata}
          title={"NFT Marketplace Contract  Metadata"}
        />
      )}
      {nft_metadata && (
        <ContractMetadata
          metadata={nft_metadata as Metadata}
          title={"NFT Collection  Concart Metada"}
        />
      )}
    </Layout>
  );
}
