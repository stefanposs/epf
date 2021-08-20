// Library for communicate with Azure Blob Storage
import {
  BlobDownloadResponseModel,
  BlobServiceClient,
  StorageSharedKeyCredential,
} from '@azure/storage-blob';
import {Logging} from '../../utils/Logging';
/**
 * Azure Blob client. Administrate files in your blob storage
 */
class AzBlobClient {
  private _accountName:string;
  private _accountKey:string;
  private _sharedKeyCredential:StorageSharedKeyCredential;
  private _log:Logging;
  private _blobServiceClient:BlobServiceClient;
  /**
   * Constructor()
   * @param {string} accountKey
   * @param {string} accountName
   */
  public constructor(
      accountKey:string,
      accountName:string,
  ) {
    this._log = new Logging();
    this._log.info(
        `Class AzBlobClient - constructor(
        accountKey=${accountKey}, 
        accountName=${accountName}
        )`,
    );
    this._accountKey = accountKey;
    this._accountName = accountName;
    this._sharedKeyCredential = new StorageSharedKeyCredential(
        this._accountName,
        this._accountKey,
    );
    this._blobServiceClient = new BlobServiceClient(
        `https://${this._accountName}.blob.core.windows.net`,
        this._sharedKeyCredential,
    );
  }
  /**
   * Upload a blob
   * @param {string} containerName
   * @param {string} blobName
   * @param {string} blobContent
   */
  public async uploadBlob(
      containerName:string,
      blobName:string,
      blobContent:string,
  ):Promise<void> {
    // Connect to Container
    const containerClient = this._blobServiceClient.getContainerClient(
        containerName,
    );
    // Create a container, if not exist
    if (!await containerClient.exists()) {
      this._log.info(
          `Class AzBlobClients - uploadBlob(
          containerName=${containerName}, 
          blobName=${blobName}, 
          blobContent=${blobContent}
          ) - container does not exist`,
      );
      try {
        await containerClient.create();
        this._log.error(
            `Class AzBlobClients - uploadBlob(
            containerName=${containerName}, 
            blobName=${blobName}, 
            blobContent=${blobContent}
            ) - container created`,
        );
      } catch (err) {
        this._log.error(
            /*
              eslint-disable
              @typescript-eslint/restrict-template-expressions,
              @typescript-eslint/no-unsafe-member-access,
            */
            `Class AzBlobClients - uploadBlob(
            containerName=${containerName}, 
            blobName=${blobName}, 
            blobContent=${blobContent}
            ) - Creating a container fails, 
            requestId - ${err.details.requestId}, 
            statusCode - ${err.statusCode}, 
            errorCode - ${err.details.errorCode}`,
            /*
              eslint-enable
              @typescript-eslint/restrict-template-expressions,
              @typescript-eslint/no-unsafe-member-access,
           */
        );
      }
    } else {
      this._log.info(
          `Class AzBlobClients - uploadBlob(
          containerName=${containerName}, 
          blobName=${blobName}, 
          blobContent=${blobContent}
          ) - container exist`,
      );
    }
    // Create a blob
    try {
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      await blockBlobClient.upload(
          blobContent,
          Buffer.byteLength(blobContent),
      );
      this._log.info(
          `Class AzBlobClients - uploadBlob(
          containerName=${containerName}, 
          blobName=${blobName}, 
          blobContent=${blobContent}
          ) - blob uploaded`,
      );
    } catch (err) {
      this._log.info(
          /*
            eslint-disable
            @typescript-eslint/restrict-template-expressions,
            @typescript-eslint/no-unsafe-member-access,
          */
          `Class AzBlobClients - uploadBlob(
          containerName=${containerName}, 
          blobName=${blobName}, 
          blobContent=${blobContent}
          ) - Creating a blob fails, 
          requestId - ${err.details.requestId}, 
          statusCode - ${err.statusCode}, 
          errorCode - ${err.details.errorCode}`,
          /*
            eslint-enable
            @typescript-eslint/restrict-template-expressions,
            @typescript-eslint/no-unsafe-member-access,
          */
      );
    }
  }
  /**
   * Delete a blob
   * @param {string} containerName
   * @param {string} blobName
   */
  public async deleteBlob(
      containerName:string,
      blobName:string,
  ):Promise<void> {
    // Connect to Container
    const containerClient = this._blobServiceClient.getContainerClient(
        containerName,
    );
    // Delete a blob
    try {
      await containerClient.deleteBlob(blobName);
      this._log.info(
          `Class AzBlobClients - deleteBlob(
          containerName=${containerName}, 
          blobName=${blobName}
          ) - blob deleted`,
      );
    } catch (err) {
      this._log.error(
          /*
            eslint-disable
            @typescript-eslint/restrict-template-expressions,
            @typescript-eslint/no-unsafe-member-access,
          */
          `Class AzBlobClients - uploadBlob(
          containerName=${containerName}, 
          blobName=${blobName}) - Deleting a blob fails, 
          requestId - ${err.details.requestId}, 
          statusCode - ${err.statusCode}, 
          errorCode - ${err.details.errorCode}`,
          /*
            eslint-enable
            @typescript-eslint/restrict-template-expressions,
            @typescript-eslint/no-unsafe-member-access,
          */
      );
    }
  }
  /**
   * Download a blob
   * @param {string} containerName
   * @param {string} blobName
   * @return {Promise<string>}
   */
  public async downloadBlob(
      containerName:string,
      blobName:string,
  ):Promise<string> {
    // Connect to Container
    const containerClient = this._blobServiceClient.getContainerClient(
        containerName,
    );
    // Check if container exist
    if (!await containerClient.exists()) {
      this._log.error(
          `Class AzBlobClients - downloadBlob(
          containerName=${containerName}, 
          blobName=${blobName}
          ) - container does not exist`,
      );
    } else {
      this._log.info(
          `Class AzBlobClients - downloadBlob(
          containerName=${containerName}, 
          blobName=${blobName}
          ) - container exist`,
      );
    }
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    if (!await blockBlobClient.exists()) {
      this._log.error(
          `Class AzBlobClients - downloadBlob(
          containerName=${containerName}, 
          blobName=${blobName}
          ) - blob not exist`,
      );
    }
    // Get blob content from position 0 to the end
    // Downloaded data by accessing downloadBlockBlobResponse.readableStreamBody
    // eslint-disable-next-line max-len
    const downloadBlockBlobResponse:BlobDownloadResponseModel = await blockBlobClient.download(0);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion,max-len
    const download = await this.streamToBuffer(downloadBlockBlobResponse.readableStreamBody!);
    return download.toString();
  }
  /**
   * A helper method used to read a Node.js readable stream into a Buffer
   * @param {NodeJS.ReadableStream} readableStream
   * @return {Promise<Buffer>}
   */
  private async streamToBuffer(
      readableStream: NodeJS.ReadableStream,
  ): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];
      readableStream.on('data', (data: Buffer | string) => {
        chunks.push(data instanceof Buffer ? data : Buffer.from(data));
      });
      readableStream.on('end', () => {
        resolve(Buffer.concat(chunks));
      });
      readableStream.on('error', reject);
    });
  }
}
export {AzBlobClient};

