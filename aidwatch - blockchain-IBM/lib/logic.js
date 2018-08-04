/* global getAssetRegistry getFactory emit */

/**
 * Sample transaction processor function.
 * @param {org.aidwatch.relief.ReliefTransaction} tx The sample transaction instance.
 * @transaction
 */
async function ReliefTransaction(tx) {  // eslint-disable-line no-unused-vars

    // Save the old value of the asset.
    //const oldValue = tx.asset.owner;

    // Update the asset with the new value.
    tx.asset.owner = tx.newOwner;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.aidwatch.relief.ReliefAsset');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);
}
